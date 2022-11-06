# Distr-Config Client
Клиентская библиотека для Distr-Config 

## Установка

```sh
npm i distrconfig-client
```

## Использование модуля в проекте

```ts
import ConfigDistrClient from "distrconfig-client";

const configDistr: ConfigDistrClient = new ConfigDistrClient('http://localhost:8080/config/');
```

## Примеры использования

### Получение последней версии конфига:
```ts
let res: object = await configDistr.getConfig('myservice');
console.log(res);
```

### Получение конфига определённой версии:
```ts
let res: object = await configDistr.getConfig('myservice', 1);
console.log(res);
```

### Создание конфига:

```ts
let res: object = await configDistr.createConfig('./test.json');
console.log(res);
```

### Обновление конфига:

```ts
let res: object = await configDistr.updateConfig('./config.json');
console.log(res);
```

### Удаление конфига:

```ts
let res: object = await configDistr.deleteConfig('myservice');
console.log(res);
```
