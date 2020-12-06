#!/bin/bash

SCRIPT_NAME=$(basename "$0")
VERSION="2020.12.5"

RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

TEST_TEMPLATE="templates/template_test.js"
SCRIPT_TEMPLATE="templates/template_js.js"

usage() {
    cat <<HELP
USAGE: $SCRIPT_NAME [-h] [-v] [-c] [-u] [-a] [-t]
    -h  - Display this help message
    -v  - Display version
    -y  - Year
    -d  - Day

DESCRIPTION:
Create new script, test and data file from templates.
HELP
}

version() {
    echo "$VERSION"
}

log() {
    local message="$1"
    
    echo -e "$GREEN$message$NC"
}

log_error() {
    local message="$1"
    local exit_code="$2"
    
    echo -e "$RED$message$NC"
    exit $exit_code;
}

create_test_file() {
    local year="$1"
    local day="$2"
    local test_dir="./test/${year}/"
    local test_file="./test/${year}/day${day}_test.js"
    local tmp_file="./test/${year}/day${day}_test.js-e"
    
    if [[ ! -d "${test_dir}" ]]
    then
        log "Creating new directory ${test_dir}"
        mkdir ${test_dir}
    fi
    
    if [[ ! -f "${test_file}" ]]
    then
        log "Creating new tets file ${test_file}"
        cp "$TEST_TEMPLATE" ${test_file}
        sed -i'' -e "s/##YEAR##/$year/g" ${test_file}
        sed -i'' -e "s/##DAY##/$day/g" ${test_file}
        rm -f ${tmp_file}
    else
        log_error "File already exists ${test_file}"
    fi
}

create_test_data_file() {
    local year="$1"
    local day="$2"
    local data_dir="./test/data/${year}/"
    local data_file="./test/data/${year}/day${day}"
    
    if [[ ! -d "${data_dir}" ]]
    then
        log "Creating new directory ${data_dir}"
        mkdir ${data_dir}
    fi
    
    if [[ ! -f "${data_file}" ]]
    then
        log "Creating new test data file ${data_file}"
        touch ${data_file}
    else
        log_error "File already exists ${data_file}"
    fi
}

create_script_file() {
    local year="$1"
    local day="$2"
    local script_dir="./src/${year}/"
    local script_file="./src/${year}/day${day}.js"
    local tmp_file="./src/${year}/day${day}.js-e"
    
    if [[ ! -d "${script_dir}" ]]
    then
        log "Creating new directory ${script_dir}"
        mkdir ${script_dir}
    fi
    
    if [[ ! -f "${script_file}" ]]
    then
        log "Creating new script file ${script_file}"
        cp "$SCRIPT_TEMPLATE" ${script_file}
        sed -i'' -e "s/##YEAR##/$year/g" ${script_file}
        sed -i'' -e "s/##DAY##/$day/g" ${script_file}
        rm -f ${tmp_file}
    else
        log_error "File already exists ${script_file}"
    fi
}

create_data_file() {
    local year="$1"
    local day="$2"
    local data_dir="./data/${year}/"
    local data_file="./data/${year}/day${day}"
    
    if [[ ! -d "${data_dir}" ]]
    then
        log "Creating new directory ${data_dir}"
        mkdir ${data_dir}
    fi
    
    if [[ ! -f "${data_file}" ]]
    then
        log "Creating new data file ${data_file}"
        touch ${data_file}
    else
        log_error "File already exists ${data_file}"
    fi
}

while getopts ":hvy:d:" opt; do
    case ${opt} in
        h)
            usage;
            exit 0;
        ;;
        v)
            version;
            exit 0;
        ;;
        y)
            YEAR=${OPTARG};
        ;;
        d)
            DAY=${OPTARG};
        ;;
        :)
            echo "Invalid option: $OPTARG requires an argument" 1>&2
            exit 1;
        ;;
        \? | *)
            usage;
            exit 1;
        ;;
    esac
done

if [[ $OPTIND  != 5 ]]
then
    echo "No arguments supplied" 1>&2
    usage
    exit 1
fi

shift $((OPTIND -1))

create_data_file "$YEAR" "$DAY";
create_script_file "$YEAR" "$DAY";
create_test_data_file "$YEAR" "$DAY";
create_test_file "$YEAR" "$DAY";
