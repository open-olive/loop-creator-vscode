#!/bin/bash

package_name=$1

curl \
  https://raw.githubusercontent.com/${GITHUB_REPOSITORY}/main/${package_name}/package.json \
  -H "Accept: application/json" > current_package.json

current_version=$(jq '.version' current_package.json)
new_version=$(jq '.version' ${GITHUB_WORKSPACE}/${package_name}/package.json)

echo "Current version for ${package_name}: ${current_version}"
echo "New version for ${package_name}: ${new_version}"

if [[ $current_version == $new_version ]]; then
  # Weird characters are terminal text coloring
  # 31 == red
  echo -e "\e[31m You must update the package version for ${package_name}\e[0m"
  exit 1
else
  # 32 == green
  echo -e "\e[32m Success: package version has been updated for ${package_name}\e[0m"
  exit 0
fi