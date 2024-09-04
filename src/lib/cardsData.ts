
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
            bgColor:"rgb(161 142 213)",
        },
        {
            id: 1,
            type: 'Teachers',
            date: "20/02/2020",
            numberOf: 3.8256,
            bgColor:"rgb(97 247 155)",
        },
        {
            id: 2,
            type: 'Parents',
            date: "20/02/2020",
            numberOf: 3.2780,
            bgColor:"rgb(161 142 213)",
        },
        {
            id: 3,
            type: 'Staffs',
            date: "20/02/2020",
            numberOf: 7.3780 ,
            bgColor:"rgb(97 247 155)",
        }
    
    ]}
]