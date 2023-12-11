import { SpectrumData } from "@base/types/spectrumData";

export function transformKeysToPascalCase(data: SpectrumData): SpectrumData {
    const transformedData: any = {} ;

    Object.entries(data).forEach(([key, value]) => {
        const pascalCaseKey = key
            .split(/(?=[A-Z])/)
            .map((word) => word[0].toUpperCase() + word.slice(1))
            .join("");

        transformedData[pascalCaseKey] = value;
        
    });
    return transformedData;
}