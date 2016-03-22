# Experiments

### Prerequisites

If you are unfamiliar with the JSON format, you may want to spend a couple minutes reading the introduction here: (http://www.json.org/)[http://www.json.org/].

### Experiment structure

Experimenter prevides an interface to define the structure of an experiment using a JSON document. This is composed to two segments:

- **structure**: a definition of the **blocks** you want to utilize in your experiment. This must take the form of a JSON object, i.e. a set of key/value pairs.
- **seqeunce**: a list of keys from the **structure** object. These need not be unique, and items from **structure** may be repeated. This determines the order
that **blocks** in your experiment will be shown.

*Note:* the term **block** refers to a single segment of your experiment. Examples of this might be: a consent form, a survey, or some video stimulus. Hopefully this idea will become increasing clear as you progress through this guide.

### Experiment data

### Developing 'Frames' for Experimenter