import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('contrats')
  getContrats(): object {
    var users = this.getTestUsers();
    return users;
  }

  @Get('user')
  getUser(): object {
    var contrats = this.getTestContrats();
    return contrats;
  }

  getTestUsers() {
    return ([
      {
        "identifiant": "user1",
        "prenom": "john",
        "nom": "doe",
        "email": "john@do.e",
        "telephone": "0643158423"
      },
      {
        "identifiant": "user1",
        "prenom": "john",
        "nom": "doe",
        "email": "john@do.e",
        "telephone": "0643158423"
      },
      {
        "identifiant": "user1",
        "prenom": "john",
        "nom": "doe",
        "email": "john@do.e",
        "telephone": "0643158423"
      }
    ])
  }

  getTestContrats() {
    return ([
      {
        "id": 0,
        "id_client": "1",
        "tiers": "Jack D",
        "description": "description test"
      },
      {
        "id": 1,
        "id_client": "1",
        "tiers": "Pierre F",
        "description": "description test"
      },
      {
        "id": 2,
        "id_client": "2",
        "tiers": "Gautier",
        "description": "description test"
      },
      {
        "id": 3,
        "id_client": "3",
        "tiers": "Jfk",
        "description": "description test"
      },
      {
        "id": 4,
        "id_client": "4",
        "tiers": "Vaillant",
        "description": "description test"
      }
    ])
  }
}
