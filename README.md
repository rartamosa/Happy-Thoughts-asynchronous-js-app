# API overview

## GET /thoughts - receive all thoughts

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
Body: { message: String }

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
