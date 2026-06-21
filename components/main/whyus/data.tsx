
import pictue1 from './../../../public/Images/stat-time.png'
import pictue2 from './../../../public/Images/stat-teacher.png'
import pictue3 from './../../../public/Images/stat-student.png'


export interface dataItemsProps {
    id: number,
    title: string,
    description: string
}


export const data : dataItemsProps[] = [

    {
        id: 1,
        title: 'منابع بی نهایت',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روز...'
    },
    {
        id: 2,
        title: 'مدرسین مجرب',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روز...'
    },
    {
        id: 3,
        title: 'دانشجویان فعال و ممتاز',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روز...'
    }
]
