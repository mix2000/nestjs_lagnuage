import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiBody, ApiResponse } from '@nestjs/swagger';

export function SwaggerFindAllLanguages() {
    return applyDecorators(
        ApiOperation({ summary: 'Получить все языки' }),
        ApiResponse({ status: 200, description: 'Успешный ответ' }),
    );
}

export function SwaggerFindLanguageById() {
    return applyDecorators(
        ApiOperation({ summary: 'Получить язык по id' }),
        ApiParam({ name: 'id', type: String, description: 'Идентификатор языка' }),
        ApiResponse({ status: 200, description: 'Успешный ответ' }),
        ApiResponse({ status: 404, description: 'Язык не найден' }),
    );
}

export function SwaggerCreateLanguage() {
    return applyDecorators(
        ApiOperation({ summary: 'Создать новый язык' }),
        ApiBody({ type: Object, description: 'Язык' }),
        ApiResponse({ status: 201, description: 'Создан новый язык' }),
    );
}

export function SwaggerUpdateLanguage() {
    return applyDecorators(
        ApiOperation({ summary: 'Update an existing language' }),
        ApiParam({ name: 'id', type: String, description: 'Идентификатор языка' }),
        ApiBody({ type: Object, description: 'Язык' }),
        ApiResponse({ status: 200, description: 'Язык обновлен' }),
    );
}

export function SwaggerDeleteLanguage() {
    return applyDecorators(
        ApiOperation({ summary: 'Удалить язык' }),
        ApiParam({ name: 'id', type: String, description: 'Идентификатор языка' }),
        ApiResponse({ status: 200, description: 'Язык удален' }),
    );
}
