# Sky Pilot

This is a rebuild of the original Sky Pilot website. This is being done to modernize the front end design, reevaluate features for a new user experience, and simplify technical workflows. Progress is deliberately slow in order to get things right. 

There is little documentation as of now, because the technical layouts are still loosely defined.

## Background

The original Sky Pilot was built in December 2020 using PostgreSQL, Express, React, and Node (the PERN stack). It was deployed on Heroku and was online, with occasional maintenances, until August 2022. It featured a store locator using the MapBox API, and a dealer login portal that presented a personalized view of product and vendor information pertinent to the dealer.

I was a less educated developer when the original Sky Pilot was made, so I want to make it better in every sense of the word. Here we are.

## Overview

The following points describe the current state and goals of each microservice:

- `spfe` : The frontend is a React TypeScript app, with style sheets written in pure CSS. Libraries like Bootstrap are avoided to prevent unnecessary bloat and to encourage learning proper CSS.
- `spbe` : The backend is an Express TypeScript app. It aims to interface with a MongoDB instance built from a Mongo Docker image. This could have been written in Rust, but I wanted to write a Node server for practice. This may change, however!
