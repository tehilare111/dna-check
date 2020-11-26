export class Form{
    reference: string;
    eventType: string;
    date: string;
    reporterName: string;
    reporterUnit: string;
    editStateBlocked: boolean;
    messages: any[];
    writtenInFormals: boolean = false;
    writtenInDrafts: boolean = false;
}

export class EventForm extends Form{
    caseIdOnMetzah: string;
    handlingResults: string;
    eventStatus: string;
    handlingStatus: string;
    equipmentsArray:any[];
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
}

export class CorruptionFormTemplate extends EventForm {
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
    handlingFile: string;
}

export class EquipmentReviewTemplate extends EventForm {
    reviewDate: string;
    reviewFile: string;
    isMatchToReport: boolean;
    equipment: string;
    equipmentType: string;
    equipmentMark: string;
    equipmentMakat: string;
    reviewReference: string;
}