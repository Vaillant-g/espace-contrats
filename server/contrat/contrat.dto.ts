//import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsUUID, } from 'class-validator';
import { Contrat } from '../model/contrat.entity';
import { User } from '../user.decorator';

export class ContratDTO implements Readonly<ContratDTO> {
    @ApiModelProperty({ required: true })
    @IsUUID()
    id: string;


    @ApiModelProperty({ required: true })
    @IsString()
    id_client: string;

    @ApiModelProperty({ required: true })
    @IsString()
    description: string;

    public static from(dto: Partial<ContratDTO>) {
        const it = new ContratDTO();
        it.id = dto.id;
        it.id_client = dto.id_client;
        it.description = dto.description;
        return it;
    }

    public static fromEntity(entity: Contrat) {
        return this.from({
            id: entity.id,
            id_client: entity.id_client,
            description: entity.description
        });
    }

    public static toEntity(dto: Partial<ContratDTO>, user: User = null) {
        const it = new Contrat();
        it.id = dto.id;
        //    it.id_client = this.id_client;
        it.description = dto.description;
        return it;
    }
}