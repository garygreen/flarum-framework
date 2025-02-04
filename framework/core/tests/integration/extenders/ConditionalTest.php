<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Flarum\Tests\integration\extenders;

use Exception;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Extend;
use Flarum\Extension\ExtensionManager;
use Flarum\Testing\integration\RetrievesAuthorizedUsers;
use Flarum\Testing\integration\TestCase;

class ConditionalTest extends TestCase
{
    use RetrievesAuthorizedUsers;

    /** @test */
    public function conditional_works_if_condition_is_primitive_true()
    {
        $this->extend(
            (new Extend\Conditional())
                ->when(true, [
                    (new Extend\ApiSerializer(ForumSerializer::class))
                        ->attributes(function () {
                            return [
                                'customConditionalAttribute' => true
                            ];
                        })
                ])
        );

        $this->app();

        $response = $this->send(
            $this->request('GET', '/api', [
                'authenticatedAs' => 1,
            ])
        );

        $payload = json_decode($response->getBody()->getContents(), true);

        $this->assertArrayHasKey('customConditionalAttribute', $payload['data']['attributes']);
    }

    /** @test */
    public function conditional_does_not_work_if_condition_is_primitive_false()
    {
        $this->extend(
            (new Extend\Conditional())
                ->when(false, [
                    (new Extend\ApiSerializer(ForumSerializer::class))
                        ->attributes(function () {
                            return [
                                'customConditionalAttribute' => true
                            ];
                        })
                ])
        );

        $this->app();

        $response = $this->send(
            $this->request('GET', '/api', [
                'authenticatedAs' => 1,
            ])
        );

        $payload = json_decode($response->getBody()->getContents(), true);

        $this->assertArrayNotHasKey('customConditionalAttribute', $payload['data']['attributes']);
    }

    /** @test */
    public function conditional_works_if_condition_is_callable_true()
    {
        $this->extend(
            (new Extend\Conditional())
                ->when(function () {
                    return true;
                }, [
                    (new Extend\ApiSerializer(ForumSerializer::class))
                        ->attributes(function () {
                            return [
                                'customConditionalAttribute' => true
                            ];
                        })
                ])
        );

        $this->app();

        $response = $this->send(
            $this->request('GET', '/api', [
                'authenticatedAs' => 1,
            ])
        );

        $payload = json_decode($response->getBody()->getContents(), true);

        $this->assertArrayHasKey('customConditionalAttribute', $payload['data']['attributes']);
    }

    /** @test */
    public function conditional_does_not_work_if_condition_is_callable_false()
    {
        $this->extend(
            (new Extend\Conditional())
                ->when(function () {
                    return false;
                }, [
                    (new Extend\ApiSerializer(ForumSerializer::class))
                        ->attributes(function () {
                            return [
                                'customConditionalAttribute' => true
                            ];
                        })
                ])
        );

        $this->app();

        $response = $this->send(
            $this->request('GET', '/api', [
                'authenticatedAs' => 1,
            ])
        );

        $payload = json_decode($response->getBody()->getContents(), true);

        $this->assertArrayNotHasKey('customConditionalAttribute', $payload['data']['attributes']);
    }

    /** @test */
    public function conditional_injects_dependencies_to_condition_callable()
    {
        $this->expectNotToPerformAssertions();

        $this->extend(
            (new Extend\Conditional())
                ->when(function (?ExtensionManager $extensions) {
                    if (! $extensions) {
                        throw new Exception('ExtensionManager not injected');
                    }
                }, [
                    (new Extend\ApiSerializer(ForumSerializer::class))
                        ->attributes(function () {
                            return [
                                'customConditionalAttribute' => true
                            ];
                        })
                ])
        );

        $this->app();
    }
}
