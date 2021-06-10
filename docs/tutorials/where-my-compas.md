---
sidebar_position: 3
title: "[Скрипт] Где мой рабочий  компас?"
---

<details>
<summary> Чо каво зочем..</summary>
<p>
По несчастию админю парк компов на Windows в одном колледже..
</p>
</details>  

Есть такая [САПР](https://ru.wikipedia.org/wiki/%D0%A1%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0_%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%B0%D1%82%D0%B8%D0%B7%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F) как Компас 3D..

Есть, работает, но иногда при запуске программы может возникнуть проблема `Error in OLE-initialization`

Решением является удаление файлов конфигов (с расширением '.config') по пути  `%appdata%/Ascon/KOMPAS-3D/19 ` (19 - версия программы)

Скрипт решение на V:

```go title="resetCompasConfigs.v"
import os

// получаем путь к %appdata%
appdata := os.getenv("appdata")

// 'собираем' полный путь
final_path := os.join_path(appdata, 'Ascon','KOMPAS-3D', '19')

// получаем список всех файлов
mut files := os.ls(final_path) or { panic(err) }

// отбираем только файлы с расширением '.config'
config_files := files.filter(it.all_after_last ('.') == 'config')

// удаляем каждый файл
for file in config_files {
	os.rm(os.join_path(final_path, file)) or { println(file) }
}
```

Для автономии получаем исполняемый файл командой `v resetCompasConfigs.v`



Возвращаясь к проблеме, [вот программа-решение](/files/resetCompasConfigs.exe) (для 19 версии)

