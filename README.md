# singletrack: MultiTracks files in ProPresenter without phoning home

`singletrack` is an SPA that takes ProPresenter presentation uploads and downloads a version without the MultiTracks licensing information. This means you can use your ProPresenter presentations in situations with no internet without having to worry about where they came from.

## Running locally

We're still in the early days, so things might be rough.

### Requirements

- [Yarn](https://yarnpkg.com) to build and run the project.

### Steps

```sh
$ git clone https://github.com/ryanq/singletrack
$ cd singletrack
$ yarn
$ yarn astro dev
```

#### Compiling the ProPresenter Protobufs files

These instructions are coming sometime soon...

## Roadmap

- [ ] Build out the landing page
- [ ] Handle file uploads through the file input
- [ ] Handle file drops
- [ ] Write instructions for building the Protobuf definitions