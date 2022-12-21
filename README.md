## List of technologies used in this project:

- HTML
- CSS
- fetch()
- vanilla JavaScript
- Rest API

<hr>

# API overview

## GET /thoughts - receive all thoughts

https://happy-thoughts-api.fly.dev

```JavaScript
{
    "data": [{
        "message": String,
        "hearts": Number,
        "_id": ObjectId,
        "__v": Number
    }],
    "success": Boolean
}
```

## POST /thoughts - add single thought

```JavaScript
Body: { message: String } 3 < length < 66

{
    "data": {
        "message": String,
        "hearts": Number,
        "_id": ObjectId,
        "__v": Number
    },
    "success": Boolean
}
```

## PUT /thoughts/like/:id - increase likes of single thought

```JavaScript
{
    "data": {
        "message": String,
        "hearts": Number,
        "_id": ObjectId,
        "__v": Number
    },
    "success": Boolean
}
```

## DELETE /thoughts/:id - remove single thought

```JavaScript
{
    "data": {
        "message": String,
        "hearts": Number,
        "_id": ObjectId,
        "__v": Number
    },
    "success": Boolean
}
```
