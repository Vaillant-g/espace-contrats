import { Entity, Column } from 'typeorm';

@Entity({ name: 'Contrat' })
export class Contrat {

    @Column({ type: 'varchar', length: 300 })
    id: string;

    @Column({ type: 'varchar', length: 300 })
    id_client: string;

    @Column({ type: 'varchar', length: 300 })
    description: string;

}