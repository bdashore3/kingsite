next_build:
	cd src/nextjs; yarn run export

rust_build: next_build
	cd src; cargo build --verbose; cargo test --verbose
	zip kingsite.zip target/debug/website -j
	cd src; zip -r -u ../kingsite.zip html images

debug: next_build
	cd src; cargo run
