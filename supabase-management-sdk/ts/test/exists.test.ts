
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { SupabaseManagementSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = SupabaseManagementSDK.test()
    equal(testsdk instanceof SupabaseManagementSDK, true,
      'SupabaseManagementSDK.test() must return a client synchronously')
  })

})
