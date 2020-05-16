export class Form{
    reference: string;
    eventType: string;
    date: string;
    reporterName: string;
    reporterUnit: string;
    editStateBlocked: boolean;
}

export class EventForm extends Form{
    caseIdOnMetzah: string;
    handlingResults: string;
    eventStatus: string;
    handlingStatus: string;
}

export class LostFormTemplate extends EventForm {
    signerUnit: string;
    signerName: string;
    signerId: string;
    rank: string;
    position: string;
    eventDate: string;
    eventHour: string;
    equipment: string;
    equipmentType: string;
    equipmentMark: string;
    equipmentMakat: string;
    eventRelevantPlacesAndFactors: string;
    eventInitialDetails: string;
    investigationDate: string;
    investigationFile: string;
    handlingDate: string
    findingDate: string;
    findingFile:string;
    handlingFile: string;
    messages: string;
}