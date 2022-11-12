# EndPoint

```
List of available endpoints:

- `POST /login`
- `POST /create`
- `DELETE /delete/:id`
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
