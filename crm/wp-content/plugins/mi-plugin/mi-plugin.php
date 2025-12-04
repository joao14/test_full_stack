<?php
/**
 * Plugin Name: Mi Plugin Personalizado
 * Description: Plugin creado por Alexander.
 * Version: 1.0
 */

if (!defined('ABSPATH'))
    exit;

add_action('rest_api_init', function () {

    register_rest_route('miapi/v1', '/users', [
        'methods' => 'GET',
        'callback' => 'miapi_list_users',
        'permission_callback' => '__return_true'
    ]);

});


function miapi_list_users()
{
    global $wpdb;

    $table = $wpdb->prefix . 'users';

    $users = $wpdb->get_results("
        SELECT ID, user_login, user_email, user_registered 
        FROM $table
    ");

    return [
        "status" => "success",
        "count" => count($users),
        "data" => $users
    ];
}
