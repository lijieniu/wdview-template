<?php

namespace App\Http\Controllers;

use App\Models\User\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
  public function getList(Request $request)
  {
    return [
      'list' => [[
        'id' => '1',
        'nickname' => 'admin',
        'avatar' => '',
        'phone' => '13800000000'
      ]],
      'total_count' => 1,
      'total_page' => 1
    ];
  }
}
