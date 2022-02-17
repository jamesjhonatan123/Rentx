import { v4 as uuidV4 } from "uuid";

class Specification {
  id?: string;
  name: string;
  description: string;
  created_at: Date;

  constructor(id: string) {
    console.log(id);
    if (!id) {
      this.id = uuidV4();
    } else {
      this.id = id;
    }
  }
}

export { Specification };

//  Quando você for implementar um repositório de especificações, precisará saber o que é uma especificação.
//  Logo, conhecemos a unidade pra desenvolver o conjunto. Model é exatamente isso, um repositório é um conjunto de models.
//  Posteriormente, utilizarei o serviço. Criar algo é um serviço, pois é acessado pelo e para o usuário.
