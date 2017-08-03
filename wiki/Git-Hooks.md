---
layout: base
permalink: wiki/git-hooks/
---

I'm not going to regurgitate what others have posted.

Here's a quick explanation..

### what it is
hooks to run before/after your git commands are executed

### Why is this useful?

* It's good to have sanity checks done automatically before you your code is public.
* Run mundane commands you would do before or after a git command

### How to use it
In your local repository, go to `.git/hooks`. They are just bash files. See [list of available hooks](https://git-scm.com/docs/githooks#_hooks).

Just replace the file or remove the `.sample` extension and rewrite its file.

#### Ok I got hooks now. What if i don't want to be crippled by it?

If you still want to have the commands to complete without running the hooks, most commands have a `--no-verify` parameter that you can include to bypass the hooks.

### Some reading materials

* [conceptual explanation](https://www.atlassian.com/git/tutorials/git-hooks/conceptual-overview)
* [http://githooks.com/](http://githooks.com/)


# Simple Hooks

The goals are:

1. to automate task that are good to check but usually i forget to do.
1. Try not to rely on external libraries to operate the hooks
1. Works for Windows with git bash for windows

Below are a few hooks I use for the different dev stack i work on:

## JS, Angular, Gulp, ESLint, NPM

### npm install after a change in the package.json

**hooks/post-merge**
```shell
#!/bin/sh

# git hook to run a command after `git pull` if a specified file was changed
# Run `chmod +x post-merge` to make it executable then put it into `.git/hooks/`.
#
# This will check for modified or added lines.
# If there are new lines we want to run the primary command
# If there are modification we want to run the secondary command
#
# This hook is called with the following parameters:
# 1. the file to watch
# 2. primary command for when code is added
# 3. secondary command for when code is modified

MOD_PATTERN='^.+(\[-|\{\+).*$'
ADD_PATTERN='^\{\+.*\+\}$'
REM_PATTERN='^\[-.*-\]$'

NPM_DEPENDENCIES_FOLDER='node_modules'

 check_run() {
    changed_files="$(git diff --word-diff --unified=0 ORIG_HEAD HEAD $1 | sed -nr \
        -e "s/$MOD_PATTERN/modified/p" \
        -e "s/$ADD_PATTERN/added/p" \
        -e "s/$REM_PATTERN/removed/p" \
        | sort | uniq -c)"

    echo "$changed_files" | grep --quiet "added" && echo -e "\e[33mFound new lines in \e[1m$1\e[0m. Running \e[7mnpm install\e[0m" && eval "$2"
    echo "$changed_files" | grep --quiet "modified" && echo -e "\e[33mFound modified lines in \e[1m$1\e[0m. Running \e[7mnpm update\e[0m" && eval "$3"
 }

if [ ! -d "$NPM_DEPENDENCIES_FOLDER" ]; then
    echo -e "\e[33mNo $NPM_DEPENDENCIES_FOLDER folder found\e[0m. Running \e[7mnpm install\e[0m"
    npm install
else    
    check_run package.json "npm install" "npm update"
fi
```

### ensure you don't leave debug code when committing

**hooks/pre-commit**
```bash
#!/bin/sh
#
# Hook to stop commits if any debug code is left behind
#
# As well it prevents focus specs to be added
#
# This hook has two functions:
# 1. check for debug lines
# 2. check for focused specs
#
# Both function expects two parameters:
# 1. the file type
# 2. the regex to look for
#
# FIXME: the check_debug for some reason can't diff on the parameter ¯\_(ツ)_/¯

EXIT_VALUE=0

check_debug() {
    debug_result="$(git diff --cached "**.js" | egrep "^\+" | grep -E $2)"
    if [ ! -z "$debug_result" ]; then
        echo -e "\e[31m\tWarning, the commit contains debug code. Please remove before commiting.\e[0m"
        EXIT_VALUE=1
    fi
}

check_fspec() {
    fspec_result="$(git diff --cached $1 | egrep "^\+" | grep -E $2)"
    if [ ! -z "$fspec_result" ]; then
        echo -e "\e[31m\tWarning, the commit contains focused specs. Please fix this before commiting.\e[0m"
        EXIT_VALUE=1
    fi    
}

check_debug **.js "(debugger)"

check_fspec *.spec.js "(fdescribe|fit|fcontext)"

exit $EXIT_VALUE
```

### gulp unit before pushing all your commits

**hooks/pre-push**
```shell
#!/bin/sh

# Called by "git push" after it has checked the remote status, but before anything
# has been pushed.  If this script exits with a non-zero status nothing will be pushed.
#
# This will run your unit test and sets the exit code base on failure or success
#
# It will hide your unit test report and a regex is required to display the
# line from the report, that would summarize your unit test result.
#
# This hook is called with the following parameters:
# 1. the unit test executable
# 2. line regex of the test summary

run_test() {
    report=$($1)
    result=$?
    echo "$report" | grep --color=auto "$2"
    exit $result
}

echo -e "\e[33mRunning test before pushing...\e[0m"

run_test "gulp unit" "Executed [0-9].* of [0-9].*"
```

## .Net - CSharp

### Ensure successful build and test are all run before pushing to remote

**hooks/pre-push**
```bash
#!/bin/sh
# https://gist.github.com/akfish/8435506

# Called by "git push" after it has checked the remote status, but before anything
# has been pushed.  If this script exits with a non-zero status nothing will be pushed.
#
# This will run msbuild and nunit to ensure your app can be run and test are successful
#
# Pre-requisite:
# 1. Install nunit3-console (https://github.com/nunit/nunit-console/releases/tag/3.5)
#
# Please update the project details below to reflect your project and its build paths
#
# (TODO would like to supress the output and summarize it)

# Path To MSBuild.exe
MSBuild="/c/Windows/Microsoft.NET/Framework/v4.0.30319/MSBuild.exe"
# Path To nunit3-console.exe
NunitCli="/c/Program\ Files\ \(x86\)/NUnit.org/nunit-console/nunit3-console.exe"

ProjectRoot="$(git rev-parse --show-toplevel)"

safeRunCommand() {
    typeset cmd="$*"
    typeset ret_code

    eval $cmd

	ret_code=$?

    if [ $ret_code != 0 ]; then
        exit $ret_code
    fi
}

# Build
ProjectSolution="<YOUR *.SLN FILE!>"
echo -e "\e[33mValidating build...\e[0m"
safeRunCommand $MSBuild $ProjectRoot/$ProjectSolution

# Test
TestsContainer="src/**/bin/*/*.*.Tests.dll"
echo -e "\e[33mRunning test before pushing...\e[0m"
safeRunCommand $NunitCli $ProjectRoot/$TestsContainer "--stoponerror --noresult --trace=Off --labels=Off --noh"
```
