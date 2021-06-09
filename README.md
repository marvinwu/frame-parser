# how to use 

## single 

```bash
node cli.js parse fixture/sands-1.html fixture/jsonFrameJob2.yaml

```


```yml
#ixture/jsonFrameJob2.yaml
'.fusion-layout-column.fusion_builder_column.fusion-builder-column-1.fusion_builder_column_1_2 .fusion-text-1': 
  title: h1
  description: [p]
'.fusion-layout-column.fusion_builder_column.fusion-builder-column-1.fusion_builder_column_1_2 .fusion-checklist-1': 
  quick_look:
    _s: li
    _d: 
      - title: i @ class
        content: [p]
'.project-content .fusion-builder-row-3 .fusion-text.fusion-text-6':
      care_2: h5:nth-last-of-type(2)
      care_2_description: h5:nth-last-of-type(2) ~ p
      care_1: h5:nth-last-of-type(1)
      care_1_description: h5:nth-last-of-type(1) + p


output

```json
{
  title: 'Anacampseros rufescens',
  description: [
    'This slow-growing succulent spreads out in clumping mats. The tops of its leaves are dark green, while the underside is a deep purple color. The green gives way to red when it is happily stressed.',
    'Click here for an explanation of terms. This page contains affiliate links'
  ],
  quick_look: [
    { title: 'fusion-li-icon fa-sun fas', content: [Array] },
    { title: 'fusion-li-icon fa-tint fas', content: [Array] },
    { title: 'fusion-li-icon fa-ruler-combined fas', content: [Array] },
    {
      title: 'fusion-li-icon fa-thermometer-half fas',
      content: [Array]
    },
    { title: 'fusion-li-icon fa-snowflake fas', content: [Array] },
    { title: 'fusion-li-icon fa-pagelines fab', content: [Array] },
    { title: 'fusion-li-icon fa-skull fas', content: [Array] },
    { title: 'fusion-li-icon fa-leaf fas', content: [Array] }
  ],
  care_2: 'Watering',
  care_2_description: "Anacampseros rufescens has typical watering needs for succulents, but is sensitive to over-watering. It's best to use the “soak and dry” method, and allow the soil to dry out completely between waterings.",
  care_1: 'Where to Plant',
  care_1_description: "Anacampseros rufescens is not cold hardy, so if you live in a zone that gets colder than 20° F (-6.7° C), it's best to plant this succulent in a container that can be brought indoors. It does well in full to partial sun."
}
```


if the job Yaml has only keys:, ie 

```yaml
'.fusion-layout-column.fusion_builder_column.fusion-builder-column-1.fusion_builder_column_1_2 .fusion-text-1': 
```

then it will output html


## parse the whole dir


```bash
node cli.js parseDir 'fixture/**/*.html' fixture/jsonFrameJob2.yaml

```