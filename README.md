### MacOS Dictionary File Generator
A simple Vue app designed to generate MacOS-compatible 'dictionary' files from json. (Files for use in the built-in MacOS Dictionary app)

Output coloration and indicators are purely for readability.

#### Usage:
+ [Apple Developer Dictionary Reference](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/DictionaryServicesProgGuide/prepare/prepare.html)  (archived)
+ Info on making your own dictionary, see http://blog.nagpals.com/mac-dictionaries/

#### data model:

```
[
  {
    key: 'term',
    def: ['definition paragraphs'],
    url: ['reference links']
  }
]
```

CodePen: https://codepen.io/brimwd/details/zYxmprv
