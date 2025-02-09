# ChangeLog

### 0.5.1 - 20150923

- Bugfix

### 0.5.0 - 20150622

- MAJOR UPDATE: changed some basic structure, now `Array` follows the natural
  `1xN` dimension (row-major). `Arrayfun` and `Vectorfun` are optimized to
  managed variabile inputs arguments for both arrays and matrices.
- Matrices: removed `row` and `col`. Now it's possible to get values with
  `getrow` and `getvalue` and set values with `setrow` and `setcol`.
- Removed: `NaN`, `uplus`
- Added: `strfind`,`argsarray`
- Modified: `yahoo`, added `yahooSync`

### 0.2.0 - 20150504

- Added new folder _datafeed_ with `yahoo` function to download historical stock
  data
- Added: `clock`, `today`, `datevec`
- Modified: `datenum`, `datestr`

### 0.1.9 - 20150427

- Updated README
- Bugfix

### 0.1.8 - 20150417

- Replaced: `xreturn` with `activereturn` in _quants_
- Added: `annadjsharpe` in _quants_
- Modified: `annavgrisk` with `annrisk` in _quants_

### 0.1.7 - 20150406

- Added in _quants_ `martinratio`, `painindex`,
  `painratio`,`sterlingratio`,`m2sortino`
- Modified: `ulcerindex`,`sortino`

### 0.1.6 - 20150329

- Added: `camlarratio`,`burkeratio`
- Replaced: `annvgreturn` with `annreturn` for annualized return
- Modified: `avgdrawdown`,`cdrawdown`,`drawdown`,`ulcerindex`

### 0.1.5 - 20150318

- Modified: `paramvar`,`histc`,`datenum`,`datestr`,`weekday`
- Bugfix

### 0.1.4 - 20150309

- Added Unit Test for all functions with auto-code
- Fixed bugs in documentation and functions

### 0.1.3 - 20150302

- Added Relational Operators: `eq`,`ge`,`gt`,`le`,`lt`,`ne`
- Modified `minus` and `plus` methods
- Fixed `tomonthly`
- Update README file

### 0.1.2 - 20150301

- Replaced `variance.js` with `varc.js`
- Updated README file and some documentation
- Bugfixes

### 0.1.1 - 20150227

- Fixed `size`,`squeeze`,`subset`(it's possible to get a whole col/row with ':'
  symbol), `subsetlin`
- New time series functions:
  `datenum`,`datestr`,`month`,`weekday`,`toweekly`,`tomonthly`
- Added `unique`,`find`
- Added dependency `moment.js` for date time manipulation

### 0.1.0 - 20150223

- Updated site http://maxto.github.io/ with custom template and logo

### 0.0.9 - 20150220

- Built Documentation: API Docs and For MATLAB Users

### 0.0.8 - 20150201

- Modified some _test_ functions
- Added in _quants_ `cdrawdown`, deleted `maxdrawdown`,`riskretratio`
- Modified `avgdrawdown`,`drawdown`,`montecarlovar`,`omegaratio`,`sharpe`,
  `sortino`,`trackerr`,`treynor`,`ulcerindex`,`xreturn`
- Added folder _util_ with `format`
- Added in _matarrs_ `array`
- Modified `matrix` and `drawdown`
- Changed README
- Added in _quants_
  `histvar`,`histcondvar`,`sharpe`,`adjsharpe`,`annavgrisk`,`downsiderisk`,
  `paramvar`,`paramcondvar`,`downsidepot`,`upsidepot`,`modigliani`,`inforatio`,`jensenalpha`
- Modified `isvector`,`linearreg`

### 0.0.7 - 20150119

- Update README file with comparative MATLAB® vs ubique
- Modified `end`, `mldivide`, `mrdivide`, `flipud`, `fliprl`
- Renamed `flip` in `flipdim`
- Added functions in _quants_
  `annavgreturn`,`annreturn`,`cagr`,`irr`,`mdietz`,`percpos`,`ror`,`twr`,`xreturn`

### 0.0.6 - 20150115

- Added Install methods: Git, Npm, Bower.
- Added minified version in _dist_ folder
- Added `gulpfile.js` for bundle, minify `npm run build` and watch
  `npm run watch`

### 0.0.5 - 20150114

- Added _contdistrib_ with `normpdf`,`normcdf`,`normiv`
- Rebuilt main structure with auto-compile for ubique constructor
- Added webpack for browser bundle in _dist_ folder

### 0.0.4 - 20150104

- Added _findat_ folder with `tick2ret`,`ret2tick` (renamed later in _quants_)
- Added in _statrnd_ `jbtest`,`pdist`
- Added in _test\util_ `arrayTestUtils`
- Added some test functions
- Bugfix

### 0.0.3 - 20150103

- Added _test_ folder
- Added _interpol_ folder with `interp1` function
- Added _regressmod_ folder with `linearreg` function
- Added in _statrnd_
  `hurst`,`iqr`,`kurtosis`,`moment`,`prctile`,`quantile`,`quartile`,`skewness`,`xkurtosis`

### 0.0.2 - 20141231

- Added LICENSE,HISTORY
- Added in _datatypes_ `islogical`
- Added in _elmath_ `exp`,`log`,`sqrt`
- Added in _statrnd_ `histc`,`mad`,`range`,`std`,`variance`,`zscore`
- Bugfix

### 0.0.1 - 20141224

First commit with more than 100 functions in the following categories:

- Arithmetic Operations
- Array Creation and Concatenation
- Array Dimensions
- Create and Concatenate Strings
- Complex Numbers
- Data Type Identification
- Descriptive Statistic
- Indexing
- Linear Equations
- Matrix Analysis
- Matrix Types
- Numeric Types
- Sorting and Reshaping Arrays
- Special Functions
- Structures
