# Getting Started

## Installation

```console
npm install common-handlers --save
```

## Finance
### Format Amount
> Returns the minified format of the amount passed
```console
formatAmount(10000)

OUTPUT:
{
  valueDisplay: 10,
  valueLabel: 'k'
}
```

### Fixed Zero
> Converts the number in two digit format with 0 as default value
```console
fixedZero(8)

OUTPUT: '08'
```

### Format Amount with Label
> Returns the formatted amount
```console
formatAmountWithLabel(1000, 'k')

OUTPUT:
{
  formattedAmmount: 1,
  label: 'k',
  display: {
    key: 'thousand',
    text: 'Thousand'
  }
}
```

### Rupee formatter
> Formats the rupee in US format
```console
rupeeFormatter(1000000)

OUTPUT: '10,00,000'
```

## Time
### Time Range
> Calculates the date and time starting from current date and time using the input parameters
> Input paramerters can be:
> 1. day: calculates current + n days and returns the date
> 2. week: calculates current + n week and returns the date
> 3. month: calculates current + n months and returns the date
> 4. year: calculates current + n years and returns the date
```console
timeRange('week', 1)  // 1 = number of weeks

OUTPUT: 
[
  current dayjs object,
  next week dayjs object
]
```

### Time Display
> Coverts the seconds into human readable format (dd hh mm ss). If passed a type as "raw", then raw values are returned
```console
timeDisplayConverter(94452)

OUTPUT: 
1d 2h 14m 12s

timeRange(94452, 'raw')

OUTPUT: 
{
  days: 1,
  hours: 2,
  minutes: 14,
  seconds: 12
}
```

## Common
### Is Empty
> Checks for empty variable, object or an array

### Is Not Number
> Checks for data which is not a number

### Is Undefined
> Checks for undefined variables