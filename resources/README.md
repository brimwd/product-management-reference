# Product Management Reference Dictionary
A simple Vue app designed to generate MacOS-compatible 'dictionary' files from json. (Files for use in the built-in MacOS Dictionary app).
Definition set contains terms relevant to Software Product Management.

Output coloration and indicators are purely for readability.

#### USAGE
Copy the HTML output and save it as `pmdictionary.xml` in the root folder (replace existing file).

#### DATA MODEL

```
[
  {
    key: 'term',
    def: ['definition paragraphs'],
    url: ['reference links']
  }
]
```

----

#### UPDATES
January 17, 2020 - Original definitions sourced from Madalyn Chea's '[Software Product Management Dictionary](https://docs.google.com/spreadsheets/d/1O4N2pu6Mu-UBhUR3pdbv6dcjNecu7oMdIX1jZkBSUxE/edit#gid=0)'

#### ACKNOWLEDGEMENTS
Original definitions spreadsheet was created by [Madalyn Chea](https://www.linkedin.com/in/sugarcoder/) in 2017 and (at the time the definitions were sourced) most-recently updated in September of 2018.

#### REFERENCES
+ [Apple Developer Dictionary Reference](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/DictionaryServicesProgGuide/prepare/prepare.html)  (archived)
+ Info on making your own dictionary, see http://blog.nagpals.com/mac-dictionaries/
