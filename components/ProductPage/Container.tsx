import { ArrowLeft } from "phosphor-react";

interface ContainerInterface {
    fun(value: boolean): void;
    setSize(value: string): void;
    type: boolean;
}

export const Container = (props: ContainerInterface) => {

    if (props.type) {
        return (
            <div className="flex flex-col items-center gap-6 w-full">
                <div className="flex items-center justify-between w-full">
                    <ArrowLeft size={24} color="#000" className="cursor-pointer" onClick={() => props.fun(false)} />
                    <label htmlFor="size" className="font-bold">Tamanho</label>
                    <div></div>
                </div>

                <select name="size" id="size" onChange={e => props.setSize(e.target.value)} className="w-full py-2 px-4 rounded-lg border border-gray-400">
                    <option value="Padrão">Padrão</option>
                    <option value="Pequeno">Pequeno</option>
                </select>

                <span className="font-bold">Não tem certeza?</span>
                <span className="underline decoration-1 cursor-pointer hover:text-gray-900 transition-colors">Veja nosso guia de tamanhos</span>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-6 w-full max-w-[400px]">
            <div className="flex items-center justify-between w-full">
                <ArrowLeft size={24} color="#000" className="cursor-pointer" onClick={() => props.fun(false)} />
                <label htmlFor="size" className="font-bold">Envios e devoluções</label>
                <div></div>
            </div>

            <span>Data estimada de entrega:</span>

            <div className="p-4 rounded bg-gray-300">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quod minima dignissimos deleniti, sapiente facere, ipsa perspiciatis sunt vitae, illum veniam voluptates suscipit sequi perferendis placeat nulla facilis blanditiis esse. Psa perspiciatis sunt vitae, illum veniam voluptates suscipit sequi perferendis placeat nulla facilis blanditiis esse.</p>
            </div>
        </div>
    )


}