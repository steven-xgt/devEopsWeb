import request from '@/utils/request'

/*
* API_MODULE: Meta
* API_USE: FETCH,CREATE,UPDATE,DELETE
* */
export function fetch_MetaList(){
  return request({
    url: '/api-ops/v1/meta/',
    method: 'GET'
  })
}

export function fetch_MetaListByPage(pagination){
  return request({
    url: '/api-ops/v1/meta/bypage/'+'?page='+pagination.page,
    method: 'GET'
  })
}

export function create_Meta(data){
  return request({
    url: '/api-ops/v1/meta/create/',
    method: 'POST',
    data: data
  })
}

export function update_Meta(data){
  return request({
    url: '/api-ops/v1/meta/'+data.id+'/update/',
    method: 'PUT',
    data: data
  })
}

export function delete_Meta(data){
  return request({
    url: '/api-ops/v1/meta/'+data.id+'/delete/',
    method: 'DELETE',
    data: data
  })
}
