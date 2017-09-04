# Display for Instabrain

## Getting started

### Install requirements
- ```python3```
- ```node``` install instructions [here](https://nodejs.org/en/download/package-manager/)
- (optional) python virtual environment

### Install display
1. Clone the repo
2. Start virtual python environment
3. ```./bin/install```
4. ```source ~/.bashrc```
5. ```./bin/run```
6. Visit ```localhost:5000```

### payload example


# `POST /rt_data`
```json
{
 "clf_outs" : [0.3, 0.5, 1.0],
 "target_class" : 3,
 "trial_num" : 1
}
```

## TODO
- Move JS dependencies out of template -> we should reason from module hierarchy, not from global variables
