# singletrack: MultiTracks files in ProPresenter without phoning home

`singletrack` is an SPA that takes ProPresenter presentation uploads and downloads a version without the MultiTracks licensing information. This means you can use your ProPresenter presentations in situations with no internet without having to worry about where they came from.

## Running locally

We're still in the early days, so things might be rough.

### Requirements

- [Yarn](https://yarnpkg.com) to build and run the project.
- [protobuf](https://protobuf.dev) to build the TypeScript files for decoding presentations.

### Steps

```sh
$ git clone https://github.com/ryanq/singletrack
$ cd singletrack
$ yarn
$ yarn astro dev
```

#### Compiling the ProPresenter Protobufs files

1. Download the ProPresenter Protobufs definition files:

    ```sh
    $ mkdir /tmp/singletrack
    $ git clone http://github.com/greyshirtguy/ProPresenter7-Proto /tmp/singletrack/pb
    ```

2. Generate new TypeScript files:

    ```sh
    $ protoc \
        --plugin=protoc-gen-ts_proto=./node_modules/.bin/protoc-gen-ts_proto \
        --ts_proto_out=./src/generated \
        -I /tmp/singletrack/pb/Proto7.16.2/ \
        presentation.proto
    ```

## Roadmap

- [x] Build out the landing page
- [x] Handle file uploads through the file input
- [x] Handle file drops
- [ ] Process files in an action
- [x] Write instructions for building the Protobuf definitions