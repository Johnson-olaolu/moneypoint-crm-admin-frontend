interface ISiteLink {
    name : string,
    path : string
}

export  const ticketLinks : ISiteLink[]  = [
    {
        name : "All",
        path : "/ticket"
    },
    {
        name : "Opened ",
        path : "/ticket?status=closed"
    }, 
    {
        name : "Completed",
        path : "/ticket?status=completed"
    },
    {
        name : "Completed",
        path : "/ticket?status=completed"
    }
]