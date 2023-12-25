interface ApiAuthConfig {
  type: 'API'
  token: string
  api: ApiConfig
}

interface ApiConfig {
  list: ApiListConfig
  delete: ApiDeleteConfig
  upload: ApiUploadConfig
}

interface ApiListGetMethod {
  type: 'GET'
}

interface ApiListPostMethod {
  type: 'POST'
  // TODO: 其他字段以后再补充
}

interface ApiListController {
  items_key: string
  image_url_key: string
  deleted_id_key: string
  thumb_key?: string
}

interface ApiListConfig {
  url: string
  method: ApiListGetMethod | ApiListPostMethod
  controller: ApiListController
}

interface ApiDeleteGetPathKind {
  type: 'PATH'
}

interface ApiDeleteQueryKind {
  type: 'QUERY'
  key: string
}

interface ApiDeleteGetMethod {
  type: 'GET'
  kind: ApiDeleteGetPathKind | ApiDeleteQueryKind
}

interface ApiDeletePostMethod {
  type: 'POST'
}

type ApiDeleteMethod = ApiDeleteGetMethod | ApiDeletePostMethod

interface ApiDeleteJsonController {
  type: 'JSON'
  key: string
  message_key?: string
  should_be: any
}

interface ApiDeleteStatusController {
  type: 'STATUS'
}

type ApiDeleteController = ApiDeleteJsonController | ApiDeleteStatusController

interface ApiDeleteConfig {
  url: string
  method: ApiDeleteMethod
  controller: ApiDeleteController
}

interface ApiUploadJsonContentType {
  type: 'JSON'
  key: string
}

type FileKind = 'STREAM' | 'BUFFER'

interface ApiUploadMultipartContentType {
  type: 'MULTIPART'
  file_kind: FileKind
  file_part_name: string
}

type ApiUploadContentType =
  | ApiUploadJsonContentType
  | ApiUploadMultipartContentType

interface ApiUploadController {
  image_url_key: string
  deleted_id_key: string
  thumb_key: string | null
}

interface ApiUploadConfig {
  url: string
  max_size: number
  timeout: number
  allowed_formats: string[]
  content_type: ApiUploadContentType
  controller: ApiUploadController
}