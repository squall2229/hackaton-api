# API service

Сервис предоставляет API для взаимодействия с ASR, NLP сервисом, фронтендом и Docx.

- Конвертация `mp3` в `wav`
- Отправка аудио в ASR сервис
- Текст из ASR обрабатывается в NLP сервисе
- Предоставление JSON данных для фронтенда
- Конвертация и выгрузка данных в word (формат `docx`)


## запуск

dev
```js
npm run dev
```
prod
```js
npm start
```

Для работоспособности сервиса необходимы:
- [Sova-ASR](https://github.com/sovaai/sova-asr)
- [NLP](https://github.com/lvodoleyl/hack_DS)

Работает по адресу `https://api.wayapp.ml`

- `/upload` - загрузка mp3 (Formdata: auido=file)
- `/download` - экспорт в docx 