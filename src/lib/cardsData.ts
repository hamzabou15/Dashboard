
type tyepData = {
    id: number,
    type: string,
    date: string,
    numberOf: number,
    bgColor: string,
}

export const cardsData: { items: tyepData[] }[] = [
  {  items: [
        {
            id: 0,
            type: 'students',
            date: "20/02/2020",
            numberOf: 2.2679,
            bgColor:"#cdb4db",
        },
        {
            id: 1,
            type: 'Teachers',
            date: "20/02/2020",
            numberOf: 3.8256,
            bgColor:"#fb8b24",
        },
        {
            id: 2,
            type: 'Parents',
            date: "20/02/2020",
            numberOf: 3.2780,
            bgColor:"#8ecae6",
        },
        {
            id: 3,
            type: 'Staffs',
            date: "20/02/2020",
            numberOf: 7.3780 ,
            bgColor:"#f4acb7",
        }
    
    ]}
]