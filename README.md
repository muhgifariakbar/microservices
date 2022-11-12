# EndPoint

```
List of available endpoints:

- `POST /login`
- `POST /employee`
- `DELETE /employee/:id`
- `GET /dataperyear`
- `GET /datapersatisfaction`
- `GET /dataperdepartment`
- `GET /combination`
```

## 1. POST /login

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_

```json
{
  "access_token": "string"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "invalid_email/password"
}
```

## 2. POST /employee

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- body:

```json
{
  "name": "string",
  "salary": "integer",
  "curreny": "string",
  "on_contract": "boolean",
  "department": "string",
  "sub_department": "string"
}
```

_Response (201 - Created)_

```json
{
  "name": "string",
  "salary": "integer",
  "curreny": "string",
  "on_contract": "boolean",
  "department": "string",
  "sub_department": "string",
  "updatedAt": "2022-08-26T03:15:59.768Z",
  "createdAt": "2022-08-26T03:15:59.768Z"
}
```

## 3. DELETE /employee/:id

Description:

- Delete employee by id

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": "integer (required)"
}
```

_Response (200 - OK)_

```json
{
  "message": "employee with id :<integer> success to delete"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "data not found"
}
```

## 5. GET /dataperyear

Description:

- Get all employee from database

Request:

- headers:

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
{
  "dataMax": [
    {
      "max": "integer"
    }
  ],
  "dataMin": [
    {
      "min": "integer"
    }
  ],
  "dataMean": [
    {
      "AVG": "integer"
    }
  ]
}
```

## 6. GET /datapersatisfaction

Description:

- Get all employee from database which are on_contract = true

Request:

- headers:

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
{
  "dataMax": [
    {
      "max": "integer"
    }
  ],
  "dataMin": [
    {
      "min": "integer"
    }
  ],
  "dataMean": [
    {
      "AVG": "integer"
    }
  ]
}
```

## 7. GET /dataperdepartment

Description:

- Get all employee from database which are on_contract = true

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- Query:

```
department = string
```

_Response (200 - OK)_

```json
{
  "dataMax": [
    {
      "max": "integer"
    }
  ],
  "dataMin": [
    {
      "min": "integer"
    }
  ],
  "dataMean": [
    {
      "AVG": "integer"
    }
  ]
}
```

## 8. GET /combination

Description:

- Get all employee from database which based on department and sub_department

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- Query:

```
department = string
sub_department =string
```

_Response (200 - OK)_

```json
{
  "dataMax": [
    {
      "max": "integer"
    }
  ],
  "dataMin": [
    {
      "min": "integer"
    }
  ],
  "dataMean": [
    {
      "AVG": "integer"
    }
  ]
}
```

## Global Error

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal Server Error"
}
```
