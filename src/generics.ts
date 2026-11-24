function wrapInArray <T>(item: T): T[]{
    return [item]
}

wrapInArray("hair")
wrapInArray(21)
wrapInArray({type: "blonde"})

function pair<a,v> (A:a, B:v):[a,v]{
    return[A,B]
}

pair("red",20)

interface Box <B>{
    content: B
}

const numBox : Box<number>={
  content: 12
}

interface apiPromise<T>{
    status: string,
    data: T
}

const res: apiPromise <{type: string}>={
    status : "OK",
    data: {type: "layered-cut"}
}

