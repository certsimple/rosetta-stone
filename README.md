# The Modern Unix Rosetta Stone

Comparing command line tasks on current operating systems:

- Windows
- Red Hat Enterprise Linux (and CentOS)
- Debian
- Ubuntu
- Arch Linux
- OS X
- OpenBSD
- FreeBSD
- SmartOS

Inspired by the original, but sadly no longer maintained, Unix Rosetta Stone.

## Where can I see it online?

[The Command Line Rosetta Stone](https://certsimple.com/rosetta-stone)

## Contributing

Simply edit `rosetta-stone.md` and send a pull request. Please note:

 - Add references to official documentation, preferably from the distributor, since this will match the version distributed with the OS. If you can't find this, use a reference from the upstream Open Source project.

 - If there are two ways doing something, add the one the distributor uses in their own documentation

## Building

You don't need to build to contribute, but if you want to build the HTML and see what your changes look like yourself:

1. Install [node.js](https://nodejs.org/)

2. Install gulp

	sudo npm install -g gulp

3. Clone the repo:

	git clone git@github.com:mikemaccana/rosetta-stone.git

3. Edit `rosettastone.md`

4. Run `gulp`, and visit `http://localhost:7777`

## Motivation

You can [read more about the history of the Rosetta Stone and the rationale for recreating it at CertSimple](https://certsimple.com/blog/recreating-unix-rosetta-stone).
