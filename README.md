# 🏋️ Academia Pro Saúde

Site institucional oficial da **Academia Pro Saúde**, desenvolvido para apresentar a estrutura da academia, modalidades, planos, profissionais, diferenciais e canais de contato.

O projeto foi desenvolvido com foco em **performance, responsividade, acessibilidade, organização de código e conversão**, proporcionando uma experiência profissional em desktop, tablet e dispositivos móveis.

---

## 📋 Sobre o projeto

A aplicação apresenta uma experiência institucional completa para uma academia física, com identidade visual baseada na marca **Academia Pro Saúde**.

O projeto possui:

* Hero institucional;
* Apresentação da academia;
* Modalidades de treino;
* Planos e preços;
* Personal Trainers;
* Galeria de fotos;
* Diferenciais;
* Depoimentos;
* CTA de conversão;
* Informações de contato;
* Integração com WhatsApp;
* Mapa/localização;
* Redes sociais;
* Menu responsivo;
* Lightbox para imagens;
* SEO básico;
* Layout responsivo.

O objetivo principal é conduzir o visitante de forma simples:

**Visita → Conhecimento → Contato → Visita à academia → Matrícula**

---

## 🎨 Identidade visual

A interface utiliza como referência principal o logotipo da Academia Pro Saúde.

### Paleta

| Cor            | Hexadecimal | Uso                  |
| -------------- | ----------- | -------------------- |
| Preto          | `#11110F`   | Fundo principal      |
| Preto profundo | `#050505`   | Seções e contraste   |
| Branco         | `#FFFFFF`   | Textos               |
| Cinza          | `#D0D0D0`   | Textos secundários   |
| Cinza escuro   | `#2A2A2A`   | Bordas e elementos   |
| Vermelho       | `#D71920`   | CTAs e destaques     |
| Laranja        | `#F28C18`   | Detalhes secundários |

A direção visual prioriza:

* alto contraste;
* fotografia esportiva;
* tipografia forte;
* composição editorial;
* estética de academia real;
* navegação simples;
* foco em conversão.

---

## 🚀 Tecnologias

* **React**
* **Vite**
* **JavaScript**
* **HTML5**
* **CSS3**
* **CSS Custom Properties**
* **JavaScript ES Modules**

O projeto utiliza React para a construção baseada em componentes e Vite como ferramenta de desenvolvimento e build. O Vite fornece servidor de desenvolvimento com HMR e gera o bundle otimizado para produção.

Documentação:

* [React — documentação oficial](https://react.dev/?utm_source=chatgpt.com)
* [Vite — documentação oficial](https://vite.dev/?utm_source=chatgpt.com)

---

## 📁 Estrutura do projeto

```text
src/
├── assets/
│   ├── images/
│   └── logo/
│
├── components/
│   ├── Header/
│   ├── Footer/
│   ├── Button/
│   ├── SectionTitle/
│   ├── PlanCard/
│   ├── PersonalCard/
│   ├── TestimonialCard/
│   ├── Gallery/
│   └── Lightbox/
│
├── data/
│   ├── plans.js
│   ├── personals.js
│   ├── testimonials.js
│   ├── modalities.js
│   ├── statistics.js
│   └── contact.js
│
├── sections/
│   ├── Hero/
│   ├── About/
│   ├── Modalities/
│   ├── Plans/
│   ├── PersonalTrainers/
│   ├── Gallery/
│   ├── Differentials/
│   ├── Testimonials/
│   ├── CTA/
│   └── Contact/
│
├── utils/
│   └── whatsapp.js
│
├── styles/
│   ├── globals.css
│   └── variables.css
│
├── App.jsx
└── main.jsx
```

---

## 🧩 Arquitetura

A aplicação utiliza uma arquitetura baseada em componentes.

Informações de negócio ficam separadas da interface para facilitar futuras alterações.

Por exemplo:

```javascript
const plans = [
  {
    id: "monthly",
    name: "Plano Mensal",
    price: "XX,XX",
    period: "/mês",
    recommended: false,
    benefits: [
      "Acesso à musculação",
      "Área cardio",
      "Avaliação inicial",
      "Horários flexíveis"
    ]
  }
];
```

Os componentes recebem os dados através de propriedades:

```jsx
{plans.map((plan) => (
  <PlanCard
    key={plan.id}
    {...plan}
  />
))}
```

Essa abordagem evita duplicação e facilita a manutenção do conteúdo.

---

## ⚙️ Configuração de conteúdo

As informações que podem mudar com frequência ficam centralizadas no diretório:

```text
src/data/
```

### Planos

```text
src/data/plans.js
```

Utilizado para configurar:

* nome;
* preço;
* período;
* benefícios;
* plano recomendado.

### Personal Trainers

```text
src/data/personals.js
```

Utilizado para configurar:

* nome;
* especialidade;
* descrição;
* Instagram;
* WhatsApp;
* imagem.

### Modalidades

```text
src/data/modalities.js
```

Utilizado para configurar as modalidades oferecidas.

### Depoimentos

```text
src/data/testimonials.js
```

Utilizado para configurar os depoimentos exibidos no site.

### Estatísticas

```text
src/data/statistics.js
```

Utilizado para configurar os indicadores da academia.

### Contato

```text
src/data/contact.js
```

Centraliza:

* endereço;
* telefone;
* WhatsApp;
* Instagram;
* horários de funcionamento.

---

## 📱 Responsividade

O site foi desenvolvido com abordagem **mobile-first**.

São considerados os seguintes dispositivos:

* smartphones;
* tablets;
* notebooks;
* desktops.

No mobile, o projeto adapta:

* navegação;
* header;
* menu;
* grids;
* planos;
* galeria;
* tipografia;
* botões;
* informações de contato.

O objetivo é manter a experiência consistente independentemente do tamanho da tela.

---

## 📸 Galeria

A galeria apresenta imagens da estrutura da academia através de um grid responsivo.

Ao selecionar uma imagem, ela pode ser visualizada em tamanho ampliado através do **Lightbox**.

O componente suporta:

* abertura da imagem;
* fechamento;
* navegação;
* interação por teclado;
* responsividade.

---

## 💬 WhatsApp

Os links de WhatsApp são centralizados para evitar números espalhados pelo código.

Exemplo:

```javascript
const whatsapp = {
  number: "",
  defaultMessage:
    "Olá! Gostaria de conhecer a Academia Pro Saúde e saber mais sobre os planos."
};
```

O número oficial deve ser configurado antes da publicação.

---

## 🔍 SEO

O projeto possui estrutura preparada para SEO básico.

Inclui:

* `title`;
* `meta description`;
* Open Graph;
* favicon;
* HTML semântico;
* hierarquia de headings;
* textos alternativos nas imagens;
* links semânticos.

### Title

```text
Academia Pro Saúde | Treino, Saúde e Resultado
```

### Description

```text
Academia Pro Saúde — estrutura completa, profissionais qualificados e treinamento para você alcançar seus objetivos.
```

---

## ♿ Acessibilidade

Foram consideradas boas práticas de acessibilidade, incluindo:

* contraste adequado;
* textos alternativos;
* elementos semânticos;
* foco visível;
* navegação por teclado;
* `aria-label` quando necessário;
* botões semanticamente corretos;
* menu mobile acessível;
* suporte a redução de movimento.

---

## ⚡ Performance

O projeto prioriza:

* componentes leves;
* CSS organizado;
* carregamento otimizado de imagens;
* lazy loading quando apropriado;
* poucas dependências;
* ausência de bibliotecas pesadas sem necessidade;
* build otimizado para produção.

O processo de build do Vite gera os arquivos estáticos destinados à publicação em serviços de hospedagem.

---

# 🛠️ Instalação

## Pré-requisitos

Recomenda-se utilizar uma versão atual do Node.js compatível com a versão do Vite utilizada no projeto.

Para versões atuais do Vite, consulte a documentação oficial para verificar os requisitos de Node.js.

Verifique as versões instaladas:

```bash
node --version
npm --version
```

---

## 📦 Instalar dependências

Clone o projeto e entre no diretório:

```bash
git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_PROJETO>
```

Instale as dependências:

```bash
npm install
```

---

## 💻 Desenvolvimento

Execute o servidor de desenvolvimento:

```bash
npm run dev
```

O Vite disponibilizará a aplicação localmente, normalmente em:

```text
http://localhost:5173
```

A porta pode variar conforme a configuração do projeto.

---

## 🏗️ Build de produção

Para gerar a versão de produção:

```bash
npm run build
```

O resultado será criado no diretório:

```text
dist/
```

O comando `vite build` gera os arquivos estáticos otimizados para publicação.

---

## 🔎 Preview da produção

Depois do build:

```bash
npm run preview
```

Isso permite validar localmente o resultado gerado para produção.

---

# 📝 Configuração antes da publicação

Antes de colocar o site em produção, substituir os placeholders pelos dados oficiais da academia.

### Dados obrigatórios

* [ ] Endereço oficial;
* [ ] Telefone;
* [ ] WhatsApp;
* [ ] Instagram;
* [ ] Horários;
* [ ] Preços dos planos;
* [ ] Nome dos Personal Trainers;
* [ ] Fotos oficiais;
* [ ] Depoimentos reais;
* [ ] Link do mapa;
* [ ] Logo oficial;
* [ ] Favicon.

**Nenhum dado fictício deve ser publicado como se fosse informação oficial da Academia Pro Saúde.**

---

# 🖼️ Assets

As imagens e recursos visuais devem ser organizados em:

```text
src/assets/images/
src/assets/logo/
```

Recomenda-se utilizar:

* WebP para fotografias;
* SVG para logos e ícones vetoriais;
* imagens dimensionadas de acordo com seu uso;
* nomes de arquivos descritivos.

Exemplo:

```text
src/assets/
├── images/
│   ├── hero-academia.webp
│   ├── musculacao.webp
│   ├── cardio.webp
│   ├── funcional.webp
│   └── recepcao.webp
│
└── logo/
    ├── logo.svg
    └── favicon.svg
```

---

# 🔄 Fluxo de atualização

Para alterar o conteúdo comercial, não é necessário modificar os componentes.

Exemplo:

```text
Alterar preço
     ↓
src/data/plans.js
     ↓
PlanCard
     ↓
Site atualizado
```

O mesmo conceito se aplica a:

```text
Personais
Modalidades
Depoimentos
Contato
Horários
Estatísticas
```

---

# 🚀 Deploy

Por ser uma aplicação React/Vite que gera arquivos estáticos, o projeto pode ser publicado em serviços compatíveis com hospedagem de aplicações frontend estáticas.

Fluxo básico:

```bash
npm install
npm run build
```

Depois, publicar o conteúdo de:

```text
dist/
```

A configuração específica depende do serviço de hospedagem escolhido.

---

# 🧪 Validação antes do deploy

Executar:

```bash
npm install
npm run build
npm run preview
```

Depois validar:

* [ ] Site abre corretamente;
* [ ] Nenhum erro no console;
* [ ] Menu desktop funcionando;
* [ ] Menu mobile funcionando;
* [ ] Todos os links funcionando;
* [ ] WhatsApp funcionando;
* [ ] Instagram configurado;
* [ ] Mapa configurado;
* [ ] Planos corretos;
* [ ] Imagens carregando;
* [ ] Lightbox funcionando;
* [ ] Layout mobile correto;
* [ ] Layout desktop correto;
* [ ] SEO configurado;
* [ ] Favicon configurado;
* [ ] Informações oficiais substituídas;
* [ ] Build de produção concluído sem erros.

---

# 📌 Status

**Em desenvolvimento / preparação para produção.**

O projeto está estruturado para receber os dados oficiais da Academia Pro Saúde antes da publicação.

---

# 📄 Licença

Projeto desenvolvido para a **Academia Pro Saúde**.

Os direitos sobre identidade visual, logotipo, fotografias, textos institucionais e demais materiais fornecidos pela academia permanecem pertencentes aos respectivos titulares.
