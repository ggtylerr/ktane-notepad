import { useEffect, useState } from "react";

interface Props {
    modulePath: string;
}

export default function DynamicModule({ modulePath }: Props) {
    const [ModuleComponent, setModuleComponent] = useState<React.FC | null>(null);

    useEffect(() => {
        async function loadModule() {
            const modules = import.meta.glob("./modules/*.tsx");
            if (modules[`./modules/${modulePath}.tsx`]) {
                const moduleImport = await modules[`./modules/${modulePath}.tsx`]();
                setModuleComponent(() => (moduleImport as { default: React.FC }).default);
            }
        }
        loadModule();
    }, [modulePath]);

    return ModuleComponent ? <ModuleComponent /> : <p>Loading...</p>;
}
