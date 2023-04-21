bundle install
bundle exec jekyll serve --livereload
bundle exec

# Optimizar imagenes

https://storage.googleapis.com/downloads.webmproject.org/releases/webp/libwebp-1.2.4-windows-x64.zip

`for file in $(find assets/*); do cwebp -q 50 "$file" -o "${file%.*}.webp"; done`

-- pc raquel
`for file in $(find assets/fotos/*); do C:/Users/raque/Downloads/libwebp-1.2.4-windows-x64/libwebp-1.2.4-windows-x64/bin/cwebp -q 50 "$file" -o "${file%.*}.webp"; done`