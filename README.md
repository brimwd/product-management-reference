# MacOS Dictionary File Generator
A simple Vue app designed to generate MacOS-compatible 'dictionary' files from json. (Files for use in the built-in MacOS Dictionary app)

Output coloration and indicators are purely for readability.

#### USAGE:
+ [Apple Developer Dictionary Reference](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/DictionaryServicesProgGuide/prepare/prepare.html)  (archived)
+ Info on making your own dictionary, see http://blog.nagpals.com/mac-dictionaries/

#### DATA MODEL:

```
[
  {
    key: 'term',
    def: ['definition paragraphs'],
    url: ['reference links']
  }
]
```

CodePen Prototype: https://codepen.io/brimwd/details/zYxmprv

----

#### UPDATES
January 17, 2020 - Original definitions sourced from a '[Software Product Management Dictionary](https://docs.google.com/spreadsheets/d/1O4N2pu6Mu-UBhUR3pdbv6dcjNecu7oMdIX1jZkBSUxE/edit#gid=0)'

#### ACKNOWLEDGEMENTS
Original definitions spreadsheet was created by [Madalyn Chea](https://www.linkedin.com/in/sugarcoder/) in 2017 and (at the time the definitions were sourced) most-recently updated in September of 2018.
