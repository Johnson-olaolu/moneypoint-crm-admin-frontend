import { ticketStatusTypes } from "./constants"

interface iTicketData {
    title : string
    description : string
    status : ticketStatusTypes,
    email : string,
    category : string,
    ticketRef : string,
    agentEmail? : string,
    createdAt : Date,
    UpdatedAt : Date, 
}

export const testTicketData : iTicketData[] = [
 {
    title : "test ticket",
    description : "I have a missing withdrawal and my password issue I have a missing withdrawal and my password issueI have a missing withdrawal and my password issue",
    status : ticketStatusTypes.OPENED,
    email : "fakeCustomer@gmail.com",
    category : "Technical",
    ticketRef : "73r2389r232739",
    createdAt : new Date(),
    UpdatedAt : new Date()
 },
 {
    title : "test ticket2",
    description : "I have a missing withdrawal and my password issue I have a missing withdrawal and my password issueI have a missing withdrawal and my password issue",
    status : ticketStatusTypes.OPENED,
    email : "fakeCustomer2@gmail.com",
    category : "Finance",
    ticketRef : "73r2389r232739",
    agentEmail : "fakeAgent@gmail.com",
    createdAt : new Date(),
    UpdatedAt : new Date()
 }
]

// id: number;

// @Column({
//     nullable : false
// })
// title: string;

// @Column({
//     nullable : false
// })
// description: string;

// @Column({
//     nullable : false
// })
// status: ticketStatusTypes;

// @Column({
//     nullable : false
// })
// email : string

// @ManyToOne(() => Category)
// @JoinColumn()
// category : Category

// @Column({
//     unique : true
// })
// ticketRef: string;

// @Column()
// agentEmail : string

// @CreateDateColumn()
// created_at: Date;

// @UpdateDateColumn()
// updated_at: Date;