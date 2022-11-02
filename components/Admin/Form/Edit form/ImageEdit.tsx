import Link from "next/link";

interface CheckboxInterface {
    editMode: boolean;
    url?:string;
    register:any;
}

export const ImageEdit = ({ editMode, url, register }: CheckboxInterface) => {

    if(editMode) return(
        <div className="flex items-center gap-2">
            <label htmlFor="id">Imagem:</label>
            <input type="file" {...register('img')} id={'img'} name={'img'} />
        </div>
    )
    return (
        <Link href={url?? ""} passHref><a target="_blank" rel='nofollow, external, noopener, noreferrer' className="underline">Prévia da imagem</a></Link>

    )
}