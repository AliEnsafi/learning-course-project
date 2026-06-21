

type Props = {

  children: string | number

}


export default function PersianNumber({ children }: Props) {


  const value = children
    .toString()
    .replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[Number(d)])


        return <>{value}</>


}
