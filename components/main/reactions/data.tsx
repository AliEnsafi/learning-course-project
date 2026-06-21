
export type reactionProps = {

    id: number,
    name: string,
    age: number,
    city: string,
    massage: string

}

interface reaction {

    id: number,
    name: string,
    age: number,
    city: string,
    massage: string

}

export const reactionData : reaction[] =  [

    {
        id: 1,
        name: 'مهرزاد شجاعی',
        age: 23,
        city: 'تهران',
        massage: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است '
    },
    {
        id: 2,
        name: 'حسین سامانی',
        age: 25,
        city: 'خرم آباد',
        massage: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است '
    },
    {
        id: 3,
        name: 'علیرضا نوری',
        age: 24,
        city: 'کرمانشاه',
        massage: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است '
    }
]
