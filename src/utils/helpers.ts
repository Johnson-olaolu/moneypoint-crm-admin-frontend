export const getInitials  = (name : string) => {
    let initials = name.split(" ")
    return  initials[0][0].toUpperCase() + initials[1][0].toUpperCase() 
}