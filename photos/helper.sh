#!/bin/bash

cmd=$1

if [[ -z "$cmd" ]];
then
    echo "./helper.sh - Helper script for photo gallery"
    echo "Commands"
    echo "  strip  - Strip EXIF data from all images (requires exiftool)"
    echo "  thumbs - Generate thumbnails (requires ImageMagick)"
    exit 0
fi

if [[ "$cmd" == "strip" ]];
then
    find . -type f -name '*.jpg' | xargs -n1 exiftool -all="" -overwrite_original_in_place
    exit
fi

if [[ "$cmd" == "thumbs" ]];
then
    images=($(find . -type f -name '*.jpg' -not -name '*thumb*'))
    for img in "${images[@]}";
    do
        noext=$(echo "$img" | rev | cut -d'.' -f2- | rev) # drop extension
        thumb="${noext}_thumb.jpg"
        convert ${img} -auto-orient -thumbnail 320x180 ${thumb}
    done
    exit 0
fi
